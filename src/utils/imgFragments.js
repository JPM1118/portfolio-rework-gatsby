import { graphql } from 'gatsby';

export const fluidImage = graphql`
fragment screenShotImage on File {
  childImageSharp {
    fluid(maxWidth: 1200, quality: 70) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const workImg = graphql`
fragment workImg on File {
  childImageSharp {
    fluid(maxWidth: 1200, quality: 90) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const iconImg = graphql`
fragment iconImg on File {
  childImageSharp {
    fluid(maxWidth: 32, quality: 90) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
