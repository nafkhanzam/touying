// touying slide counters
#let slide-counter = counter("touying-slide-counter")
#let last-slide-counter = counter("touying-last-slide-counter")
#let last-slide-number = context { last-slide-counter.final().first() }

#let touying-progress(callback) = context {
  if last-slide-counter.final().first() == 0 {
    callback(1.0)
    return
  }
  let ratio = calc.min(1.0, slide-counter.get().first() / last-slide-counter.final().first())
  callback(ratio)
}

// sections
#let sections-state = state("touying-sections-state", ((kind: "section", title: none, short-title: none, loc: none, count: 0, children: ()),))

// slide title state
#let slide-title-state = state("touying-slide-title-state", none)

// slide note state
#let slide-note-state = state("touying-slide-note-state", none)

#let _new-section(short-title: auto, duplicate: false, title) = context {
  let loc = here()
  sections-state.update(sections => {
    if duplicate or sections.last().title != title or sections.last().short-title != short-title {
      sections.push((kind: "section", title: title, short-title: short-title, loc: loc, count: 0, children: ()))
    }
    sections
  })
}

#let _new-subsection(short-title: auto, duplicate: false, title) = context {
  let loc = here()
  sections-state.update(sections => {
    let last-section = sections.pop()
    let last-subsection = (kind: "none")
    let i = -1
    while last-subsection.kind != "subsection" {
      last-subsection = last-section.children.at(i, default: (kind: "subsection", title: none, short-title: none, loc: none, count: 0, children: ()))
      i += 1
    }
    if duplicate or last-subsection.title != title or last-subsection.short-title != short-title {
      last-section.children.push((kind: "subsection", title: title, short-title: short-title, loc: loc, count: 0, children: ()))
    }
    sections.push(last-section)
    sections
  })
}

#let _new-subsubsection(short-title: auto, duplicate: false, title) = context {
  let loc = here()
  sections-state.update(sections => {
    let last-section = sections.pop()
    let last-subsection = last-section.children.pop()
    let last-subsubsection = (kind: "none")
    let i = -1
    while last-subsubsection.kind != "subsubsection" {
      last-subsubsection = last-subsection.children.at(i, default: (kind: "subsubsection", title: none, short-title: none, loc: none, count: 0, children: ()))
      i += 1
    }
    if duplicate or last-subsubsection.title != title or last-subsubsection.short-title != short-title {
      last-subsection.children.push((kind: "subsubsection", title: title, short-title: short-title, loc: loc, count: 0, children: ()))
    }
    last-section.children.push(last-subsection)
    sections.push(last-section)
    sections
  })
}

#let _sections-step(repetitions) = context {
  let loc = here()
  sections-state.update(sections => {
    let last-section = sections.pop()
    if last-section.children.len() == 0 or last-section.children.last().kind == "slide" {
      //? update for section
      last-section.children.push((kind: "slide", loc: loc, count: repetitions))
      last-section.count += 1
      sections.push(last-section)
    } else if last-section.children.last().children.len() == 0 or last-section.children.last().children.last().kind == "slide" {
      //? update for subsection
      let last-subsection = last-section.children.pop()
      last-subsection.children.push((kind: "slide", loc: loc, count: repetitions))
      last-subsection.count += 1
      last-section.children.push(last-subsection)
      last-section.count += 1
      sections.push(last-section)
    } else {
      //? update for subsubsection
      let last-subsection = last-section.children.pop()
      let last-subsubsection = last-subsection.children.pop()
      last-subsubsection.children.push((kind: "slide", loc: loc, count: repetitions))
      last-subsubsection.count += 1
      last-subsection.children.push(last-subsubsection)
      last-subsection.count += 1
      last-section.children.push(last-subsection)
      last-section.count += 1
      sections.push(last-section)
    }
    sections
  })
}

#let touying-final-sections(callback) = context {
  callback(sections-state.final())
}

#let touying-outline(self: none, func: enum, enum-args: (:), list-args: (:), padding: 0pt) = touying-final-sections(sections => {
  let enum-args = (full: true) + enum-args
  if self != none and self.numbering != none {
    enum-args = (numbering: self.numbering) + enum-args
  }
  let args = if func == enum { enum-args } else { list-args }
  pad(padding, func(
    ..args,
    ..sections.filter(section => section.loc != none)
      .map(section => [#link(section.loc, section.title)<touying-link>] + if section.children.filter(it => it.kind != "slide").len() > 0 {
        let subsections = section.children.filter(it => it.kind != "slide")
        func(
          ..args,
          ..subsections.map(subsection => [#link(subsection.loc, subsection.title)<touying-link>])
        )
      })
  ))
})

#let current-section-title = context {
  let sections = sections-state.get()
  sections.last().title
}

#let current-subsection-title = context {
  let sections = sections-state.get()
  let subsections = sections.last().children.filter(v => v.kind == "subsection")
  if subsections.len() > 0 {
    subsections.last().title
  } else {
    none
  }
}

#let current-subsubsection-title = context {
  let sections = sections-state.get()
  let subsubsections = sections.last().children.last().children.filter(v => v.kind == "subsubsection")
  if subsubsections.len() > 0 {
    subsubsections.last().title
  } else {
    none
  }
}

#let current-slide-title = context slide-title-state.get()

#let current-slide-note = context slide-note-state.get()

#let _typst-numbering = numbering
#let current-section-number(numbering: "01", ignore-zero: true) = context {
  let sections = sections-state.get()
  if not ignore-zero or sections.len() - 1 != 0 {
    _typst-numbering(numbering, sections.len() - 1)
  }
}

#let current-section-with-numbering(self, ignore-zero: true) = context {
  let sections = sections-state.get()
  if self.numbering != none and (not ignore-zero or sections.len() - 1 != 0) {
    _typst-numbering(self.numbering, sections.len() - 1)
    [ ]
  }
  sections.last().title
}

#let current-subsection-number(numbering: "1.1", ignore-zero: true) = context {
  let sections = sections-state.get()
  let subsections = sections.last().children
  if (not ignore-zero or sections.len() - 1 != 0) and (not ignore-zero or subsections.len() - 1 != 0) {
    _typst-numbering(numbering, sections.len() - 1, subsections.len() - 1)
  }
}

#let current-subsection-with-numbering(self, ignore-zero: true) = context {
  let sections = sections-state.get()
  let subsections = sections.last().children
  if self.numbering != none and (not ignore-zero or sections.len() - 1 != 0) and (not ignore-zero or subsections.len() - 1 != 0) {
    _typst-numbering(self.numbering, sections.len() - 1, subsections.len() - 1)
    [ ]
  }
  subsections.last().title
}

#let touying-progress-with-sections(callback) = context {
  callback((
    current-sections: sections-state.get(),
    final-sections: sections-state.final(),
    current-slide-number: slide-counter.get().first(),
    last-slide-number: last-slide-counter.final().first(),
  ))
}
