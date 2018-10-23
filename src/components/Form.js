import React from 'react';
import styled from 'styled-components';
import ArrowDown from 'react-icons/lib/ti/arrow-down-outline';

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  margin-left: 0;
  border: 2px solid palevioletred;
  background: white;
  border-radius: 3px;
  font-size: 1em;
  flex-basis: 380px;
`;

const TextArea = styled.textarea`
  color: palevioletred;
  margin: 0.5em;
  margin-left: 0;
  padding: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  flex-basis: 600px;
`;

const Label = styled.label`
  color: #333;
  margin-bottom: 1px;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1.1em;
  margin: 0;
  margin-top: .25em;
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
`;

const FormControl = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 400px;
`

const Form = styled.form`
  background-color: white;
  font-size: 1.1em;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const CTA = styled.h1`
  font-size: 2em;
  margin-bottom: .25em;
`;

const Phone = styled.a`
  color: #444;
`;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 20px;
  border-radius: 20px;
`;

const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
`
const Call = styled.h2`
  font-size: 1.4em;
  margin-bottom: .75em;
  margin-top: 1.25em;
`;
const Or = styled.h1`
  font-size: 2em;
  margin-bottom: .25em;
  margin-top: .25em;
  color: #666;
  text-align: center;
`;
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Thank you! We will contact you shortly."))
      .then(() => this.state = {})
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <CTA>Give us a try!</CTA>
        <HR />
        <Call>Phone: <Phone href="tel:941-896-1601">941-896-1601</Phone></Call>
        <Or>- OR -</Or>
        <Form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <Input name="bot-field" />
            </label>
          </p>
      
          <FormControl>
            <Label>Name:</Label>
            <Input type="text" name="name" onChange={this.handleChange} placeholder="name"/>
          </FormControl>
          <FormControl>
            <Label>Email:</Label>
            <Input type="email" name="email" onChange={this.handleChange} placeholder="your@email.com"/>
          </FormControl>
          <FormControl>
            <Label>Phone:</Label>
            <Input type="phone" name="phone" onChange={this.handleChange} placeholder="941-555-5555"/>
          </FormControl>
          <FormControl>
            <Label>Message:</Label>
            <TextArea name="message" onChange={this.handleChange}/>
          </FormControl>
          <div data-netlify-recaptcha></div>
          <FormControl>
            <Button type="submit">Get Started</Button>
          </FormControl>
        </Form>
      </Wrapper>
    );
  }
}
