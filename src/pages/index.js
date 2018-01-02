import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Form from '../components/Form';
import styled from 'styled-components';
import Line from 'react-icons/lib/md/linear-scale';
import Checked from 'react-icons/lib/ti/input-checked';
import BullsEye from 'react-icons/lib/fa/bullseye';
import Map from 'react-icons/lib/ti/map';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const {
      image,
      title,
      subtitle,
      heading,
      description,
      intro,
      main,
      testimonials,
      full_image,
      pricing
    } = this.props.data.markdownRemark.frontmatter;

    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <LandingPage
          image={image}
          title={title}
          subtitle={subtitle}
          heading={heading}
          description={description}
          intro={intro}
          main={main}
          testimonials={testimonials}
          fullImage={full_image}
          pricing={pricing}
        />
      </div>
    );
  }
}

const Container = styled.div`
  width: 1260px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 3em;
  color: white;
  line-height: 1em;
  margin-bottom: 1em;
`

const Subtitle = styled.a`
  font-size: 1.3em;
  color: white;
  text-decoration: none;
`

const LineWrapper = styled.h1`
  font-size: 2em;
  color: white;
  line-height: 0.5em;
`

const Benefit = styled.h4`
  font-size: 1.7em;
  color: white;
  line-height: 1.4em;
  margin: 0;
`

const Benefits = styled.div`
  margin-bottom: 1.5em;
`

const Section = styled.div`
  flex-basis: 400px;
`

// ServicesSubTitle
const ServiceHeader = styled.div`
  max-width: 200em;
  flex-shrink: 1;
`
const ServicesTitle = styled.h1`
  font-size: 3.4em;
  color: white;
  line-height: 1.5em;
  margin-bottom: 1em;
`
const ServicesSubTitle = styled.h3`
  font-size: 1.5em;
  color: white;
  line-height: 1em;
`
const Services = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Service = styled.div`
  flex-basis: 320px;
  padding: 1em;
`
const ServiceTitle = styled.h1`
  font-size: 1.5em;
  line-height: 1.5em;
  color: white;
`
const ServiceDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.2em;
  color: white;
`
//

//
const Features = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Feature = styled.div`
  flex-basis: 400px;
  text-align: center;
`
const FeatureTitle = styled.h1`
  font-size: 1.5em;
  line-height: 1.7
`
const FeatureIcon = styled.h1`
  font-size: 5em;
`
const FeatureDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.3em;
`
const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
`
//

const SecondFormHolder = styled.div`
  width: 400px;
`

const LandingPage = ({
    image, title, subtitle, heading, description, intro, main, testimonials, fullImage, pricing
  }) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 98vh;
    padding: 1em;
    background-image: linear-gradient(rgba(219, 112, 147, 0.6), rgba(0, 0, 0, 0.6)),
          url('${fullImage}');
  `;
  const Wrapper2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 70vh;
    padding: 1em;
  `;
  const Wrapper3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
    padding: 1em;
    background-image: linear-gradient(rgba(219, 112, 147, 0.6), rgba(0, 0, 0, 0.6)),
          url('${intro.blurbs[0].image}');
  `;
    return (
      <div>
        <Wrapper>
          <Container>
            <section>
              <Title>{title}</Title>
              <Benefits>
                <Benefit><Checked /> Satisfaction Guarantee</Benefit>
                <Benefit><Checked /> Supports Recovering Women</Benefit>
                <Benefit><Checked /> Fully Insured</Benefit>
              </Benefits>
              <LineWrapper><Line /></LineWrapper>
              <Subtitle href="http://www.b4ashes.com">{subtitle}</Subtitle>
              <LineWrapper><Line /></LineWrapper>
            </section>
            <Section>
              <Form />
            </Section>
          </Container>
        </Wrapper>

        <Wrapper2>
          <Container>
            <Features>
              <Feature>
                <FeatureIcon><BullsEye /></FeatureIcon>
                <FeatureTitle>Mission</FeatureTitle>
                <FeatureDescription>Provide outstanding cleaning services with all proceeds applied directly to Beauty for Ashes Women’s Home, a faith-based 501(c)(3) corporation focused on long term recovery for women in crisis.</FeatureDescription>
              </Feature>
              <Feature>
                <FeatureIcon><Map /></FeatureIcon>
                <FeatureTitle>Location</FeatureTitle>
                <FeatureDescription>Based in Bradenton, we serve Manatee and Sarasota County area.</FeatureDescription>
              </Feature>
              <Feature>
                <FeatureIcon><Checked /></FeatureIcon>
                <FeatureTitle>Satisfaction Guaranteed</FeatureTitle>
                <FeatureDescription>Call us if you are not completely satisfied and we will be happy to make it right</FeatureDescription>
              </Feature>
            </Features>
          </Container>
        </Wrapper2>

        <Wrapper3>
            <ServicesSubTitle>All proceeds applied directly to Beauty for Ashes Women’s Home</ServicesSubTitle>
            <ServicesTitle>Outstanding cleaning services</ServicesTitle>
            <Container>
            <Services>
              <Service>
                <ServiceTitle>Standard House Cleaning</ServiceTitle>
                <HR />
                <ServiceDescription>Thorough house cleaning - 30/hr <br /> With our supplies - 35/hr<br /> 3 hour minimum</ServiceDescription>
              </Service>
              <Service>
                <ServiceTitle>Deep Clean</ServiceTitle>
                <HR />
                <ServiceDescription>Special request cleaning <br /> Focus on buildup<br /> Will quote by the job</ServiceDescription>
              </Service>
              <Service>
                <ServiceTitle>Move-in/out</ServiceTitle>
                <HR />
                <ServiceDescription>Clean house prior to move-in or after move-out<br /> Starting at $40/hr. <br /> 3 hour minimum</ServiceDescription>
              </Service>
              <Service>
                <ServiceTitle>Windows</ServiceTitle>
                <HR />
                <ServiceDescription>Window cleaning by the hour while we are at your house</ServiceDescription>
              </Service>
              <Service>
                <ServiceTitle>New Construction</ServiceTitle>
                <HR />
                <ServiceDescription>Clean after new home construction<br /> Starting at 40/hr <br /> 3 hour minimum</ServiceDescription>
              </Service>
              <Service>
                <ServiceTitle>Commercial Office Space</ServiceTitle>
                <HR />
                <ServiceDescription>Temporary or long-term contract <br /> Will provide you a quote <br /> 3 hour minimum</ServiceDescription>
              </Service>
            </Services>
          </Container>
        </Wrapper3>
        <Wrapper2>
          <SecondFormHolder>
            <Form />
          </SecondFormHolder>
        </Wrapper2>
      </div>
  )};

export const landingPageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "product-page" } }) {
      frontmatter {
        title
        subtitle
        path
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
