import React from 'react'

export function wrapWords(str, tmpl) {
  return str.replace(/\w+/g, tmpl || "<span aria-hidden='true'>$&</span>")
}

export function createMarkup(text) {
  let title = ''

  if (Array.isArray(text)) {
    let title_array = []
    for (let index = 0; index < text.length; index++) {
      const element = text[index]
      title_array.push(wrapWords(element))
    }
    title = title_array.join('<br / >')
  } else {
    title = wrapWords(text)
  }
  return { __html: title }
}

export function format_paras(text) {
  let newText = text
    .split('\n')
    .map((item, i) =>
      item ? <p key={i} dangerouslySetInnerHTML={{ __html: item }} /> : ''
    )
  return newText
}

export function format_date(date) {
  var d = new Date(date)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear()
}

function choose_content_block(block, i) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={block.type + '_' + i}
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )
      break
    case 'image':
      return (
        <p key={block.type + '_' + i}>
          <img src={block.url} alt={block.alt} />
        </p>
      )
      break
    default:
    // code block
  }
}

export function format_content(blocks) {
  let newText = blocks.map((item, i) =>
    item ? choose_content_block(item, i) : ''
  )
  return newText
}
