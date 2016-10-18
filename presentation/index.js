// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Spectacle,
  Deck,
  Slide,
  Heading,
  Code,
  Link,
  Image,
  Text,
  List,
  ListItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  contained: require('../assets/contained.gif'),
  less: require('../assets/less-logo.jpg'),
  sass: require('../assets/sass-logo.jpg'),
  stylus: require('../assets/stylus-logo.png'),
  gulp: require('../assets/gulp-logo.jpg')
};

preloader(images);

const white = '#FFFFFF';
const purple = '#554281';
const blue = '#559DFF';

const theme = createTheme({
  primary: purple,
  secondary: white,
  tertiary: white,

},{
  primary: "Helvetica",
  secondary: "Georgia"
});

const notes = {
  one: `
<ul>
  <li>Beyond Bootstrap</li>
</ul>
  `,
  two: `
<ul>
  <li>How to Write CSS and Free Yourself from the Framework</li>
  <li>Name's Changed Many Times</li>
  <li>Slides are on Github. Will be lots of links to things talked about in these slides.</li>
</ul>
  `,
  three: `
<ul>
  <li>Talk is not about specific CSS syntax or concepts (flexbox, box model, rem vs em); there are many tutorials online for that</li>
  <li>Talk's about the mindset you should have when writing your own CSS</li>
  <li>You may have picked up some bad habits along the way. Purpose is to free yourself from the framework, so it's not something you have to depend on.</li>
  <li>Also, best practices for writing CSS which will overall save you time</li>
</ul>
  `,
  four: `
<ul>
  <li>Frameworks</li>
</ul>
  `,
  five: `
<ul>
  <li>Get you going quickly</li>
  <li>Don't have to worry about styles; can focus on problem at hand</li>
  <li>When styling doesn't matter; proof of concecpt, not public facing</li>
</ul>
  `,
  six: `
<ul>
  <li>Lock you into someone else's choices</li>
  <li>Often based on classes (which no one can seem to agree on (BEM, SMACSS, etc.))</li>
  <li>Starts to look like aliased inline styles, which we can agree are gross</li>
  <li>Brings up topic of separation of concerns, which I'll talk about later</li>
  <li>Your site looks the same as everyone else's (Every Bootstrap Site Ever)</li>
</ul>
  `,
  seven: `
<ul>
  <li>Very Specific Styles</li>
  <li>!important to Override Things</li>
  <li>Cascading issues and name conflicts - what if I want to make a 'container'?</li>
  <li>Brittle - What if the HTML changes?</li>
</ul>
  `,
  eight: `
<ul>
  <li>@fat (Creator of Bootstrap) has a great talk about the history of CSS and how it is what it is today</li>
</ul>
  `,
  nine: `
<ul>
  <li>Go Through</li>
  <li>First Need Content</li>
  <li>Things should think about when styling (Color, Typography, Responsiveness)</li>
</ul>
  `,
  ten: `
<ul>
  <li>Read over article</li>
</ul>
  `,
  eleven: `
<ul>
  <li>Quote: Adam Morse</li>
  <li>Golden Rule: Aim to Write the Least CSS as Possible</li>
  <li>Prevents dead code or redefining common things</li>
  <li>Avoids codebase from growing unnecessarily</li>
</ul>
  `,
  twelve: `

  `,
  thirteen: `
<ul>
  <li>Use a Preprocessor</li>
  <li>Gives you features like variables, functions, mixins, nesting (but not too much since will start to mirror HTML)</li>
  <li>Modularize your styles</li>
  <li>Allows you to write styles easier without having to type as much</li>
  <li>But you'll have to add a build system to compile these styles - Gulp is an example</li>
  <li>May not be an issue to have one - if you're working in node, you'll likely already have one</li>
</ul>
  `,
  fourteen: `
<ul>
  <li>How you structure code is just as important as the code</li>
  <li>Make it easier for people to find styles so that you don't resort to writing more</li>
  <li>Sass Guidelines</li>
  <li>7-1 Pattern</li>
</ul>
  `,
  fifteen: `
<ul>
  <li>Web is moving towards modular components</li>
  <li>THere's a divide between the community whether or not to abandon the cascade</li>
  <li>Many in React community have opted to put the styles in the JS, just like how the HTML is in the JS</li>
  <li>Separation of Concerns: By grouping everything together, allows you to reason about a component without having to open any other files</li>
  <li>Allows for shareability of components; also don't have to worry that someone changed a global style and broke how your component looks</li>
  <li>You can simulate this by wrapping all your individual components in a specific class</li>
  <li>Question for audience: how to have modular Sass and take advantage of mixins, etc. without importing them multiple times (dedupe the imports)</li>
</ul>
  `,
  sixteen: `
<ul>
  <li>If you still want a framework, check out Tachyons</li>
  <li>It attempts to be a minimal styling toolkit that helps you but doesn't get in your way</li>
</ul>
  `,
  seventeen: `

  `
};


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>

          <Slide notes={notes.one}>
            <Heading>
              Beyond Bootstrap
            </Heading>
            <br />
            <Image src={images.contained} width={500} />
          </Slide>

          <Slide notes={notes.two}>
            <Heading size={2}>
              How to Write CSS and Free Yourself from the Framework
            </Heading>
            <br />
            <Text style={{ color: blue }}>
              github.com/billdybas/BeyondBootstrapTalk
            </Text>
          </Slide>

          <Slide notes={notes.three}>
            <Heading>
              Purpose of this Talk
            </Heading>
          </Slide>

          <Slide notes={notes.four}>
            <Heading>
              Frameworks
            </Heading>
          </Slide>

          <Slide notes={notes.five}>
            <Heading>
              The Good
            </Heading>
          </Slide>

          <Slide notes={notes.six}>
            <Heading>
              <Link href="http://adventurega.me/bootstrap/" style={{ color: white }}>
                The Bad
              </Link>
            </Heading>
          </Slide>

          <Slide notes={notes.seven}>
            <Heading>
              The Ugly
            </Heading>
            <br />
            <Code>
{`
li .myClass #foo .yourClass > p {
  color: blue !important;
}`}
            </Code>
          </Slide>

          <Slide notes={notes.eight}>
            <Heading>
              <Link href="https://www.youtube.com/watch?v=iniwPUEbPUM" style={{ color: white }}>
                Cascading Shit Show
              </Link>
            </Heading>
          </Slide>

          <Slide notes={notes.nine}>
            <Link href="http://jgthms.com/web-design-in-4-minutes/" style={{ color: blue }}>
              Web Design in 4 Minutes
            </Link>
          </Slide>

          <Slide notes={notes.ten}>
            <Heading>
              <Link href="http://mrmrs.io/writing/2014/08/11/good-css/" style={{ color: white }}>
                Good CSS
              </Link>
            </Heading>
          </Slide>

          <Slide notes={notes.eleven}>
            <Link href="http://mrmrs.io/writing/2016/03/24/scalable-css/" style={{ color: white }}>
              "Writing new css should be the exception, not the rule."
            </Link>
          </Slide>

          <Slide notes={notes.twelve}>
            <Heading>
              Tools
            </Heading>
          </Slide>

          <Slide notes={notes.thirteen}>
            <Image src={images.sass} height={250} margin="10px" />
            <Image src={images.less} height={250} margin="10px" />
            <Image src={images.stylus} height={250} margin="10px" />
            <Image src={images.gulp} height={250} margin="10px" />
          </Slide>

          <Slide notes={notes.fourteen}>
            <Link href="https://sass-guidelin.es/#architecture" style={{ color: white }}>
              Structure
            </Link>
            <List>
              <ListItem>base/</ListItem>
              <ListItem>components/</ListItem>
              <ListItem>layout/</ListItem>
              <ListItem>pages/</ListItem>
              <ListItem>themes/</ListItem>
              <ListItem>abstracts/</ListItem>
              <ListItem>vendors/</ListItem>
              <ListItem>main.scss</ListItem>
              <ListItem>shame.scss</ListItem>
            </List>
          </Slide>

          <Slide notes={notes.fifteen}>
            <Heading>
              Styles for React & Modular Code
            </Heading>
          </Slide>

          <Slide notes={notes.sixteen}>
            Still want a framework? Check out
            <br />
            <Heading size={2}>
              <Link href="http://tachyons.io/" style={{ color: white }}>
                Tachyons
              </Link>
            </Heading>
          </Slide>

          <Slide notes={notes.seventeen}>
            <Heading>
              Questions?
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
