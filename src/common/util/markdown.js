import React from 'react'
import marked from 'marked'

export default function render2Markdown (str, config) {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    ...config
  })
  return <div dangerouslySetInnerHTML={{ __html: marked(str) }} />
}
