import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  background-color: palevioletred;
  padding: 1em;
`

const Section = styled.section`

`

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={item.image}>
        <section>
          <p>
            <img alt="" src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
