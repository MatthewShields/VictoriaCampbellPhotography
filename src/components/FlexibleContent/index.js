import React from 'react'
import TextBlock from '../TextBlock/'
import ImageGrid from '../ImageGrid/'

class FlexibleContent extends React.Component {
  choose_section(section) {
    switch (section.type) {
      case 'text_block':
        return (
          <TextBlock
            title={section.primary.text_block_title[0].text}
            text={section.primary.text_block_content}
          />
        )
        break
      case 'image_grid':
        return <ImageGrid images={section.fields} />
        break
      default:
      // code block
    }
  }

  render() {
    let sections = this.props.sections
    return (
      <div>
        {sections.map((section, index) => (
          <div key={section.type + '_' + index}>
            {this.choose_section(section)}
          </div>
        ))}
      </div>
    )
  }
}

export default FlexibleContent
