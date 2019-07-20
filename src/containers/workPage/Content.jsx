import React from 'react';
import GlitchText from '../../components/GlitchText';
import Paragraph from '../../components/Typography/Paragraph';
import Showcase from '../../components/Showcase';
import ContentContainer from '../../components/StyledComponents/ContentContainer';

const Content = (props) => {
  const { projects } = props;
  console.log(projects)
  return (
    <ContentContainer>
      <GlitchText size="32px"> Work:: </GlitchText>
      <Paragraph width="500px">
        Work previously done. All types of project except videogames.
            </Paragraph>
      {projects.map(({ node }) => {
        const { title, imagePreview } = node.frontmatter;
        console.log(imagePreview);
        return (
          <Showcase to={`project/${node.fields.slug}`} text={title} src={`portfolio-preview/${imagePreview}`} />
        )
      })}
    </ContentContainer>
  )
};

export default Content;

