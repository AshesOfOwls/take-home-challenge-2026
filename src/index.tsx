import {
  Body,
  Paragraph,
  List,
  ListItem,
  TaskHeader,
  Code,
  MainHeader,
  HorizontalRule,
  MockupImage,
} from './components/layout/content';
import { PageWrapper } from './components/layout/page-wrapper';

export function HomePage() {
  return (
    <PageWrapper heading='Read me first!' icon='dispensaries'>
      <Body>
        <Paragraph>Welcome to Dutchie's front end technical challenge!</Paragraph>

        <Paragraph>Here are the tools you'll be using for this project:</Paragraph>
      </Body>

      <List>
        <ListItem>
          <a href='https://pnpm.io/' target='_blank' rel='noreferrer'>
            pnpm
          </a>{' '}
          (please use pnpm; mixing with other package managers can get things tangled!)
        </ListItem>
        <ListItem>
          <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            React
          </a>
        </ListItem>
        <ListItem>
          <a href='https://emotion.sh/docs/introduction/' target='_blank' rel='noreferrer'>
            Emotion
          </a>
        </ListItem>
        <ListItem>
          <a href='https://tanstack.com/query/latest/docs/framework/react/overview/' target='_blank' rel='noreferrer'>
            Tanstack Query
          </a>
        </ListItem>
        <ListItem>
          <a href='https://vitest.dev/' target='_blank' rel='noreferrer'>
            Vitest
          </a>
        </ListItem>
        <ListItem>
          <a href='https://testing-library.com/docs/react-testing-library/intro/' target='_blank' rel='noreferrer'>
            React Testing Library
          </a>
        </ListItem>
      </List>
      <HorizontalRule />
      <MainHeader>The Challenge</MainHeader>
      <Paragraph>
        Please complete the 3 tasks listed below. As you work, bear the following in mind:
        <ul>
          <li>Your solution should go in the "Your Storefront" section of the app.</li>
          <li>Try to make lots of small, well-scoped commits.</li>
          <li>
            Feel free to use AI as much as you normally would in your regular work! But make sure you deeply understand
            all the code you're committing and can discuss your technical decisions and implementations at length.
          </li>
          <li>
            Write a few basic unit tests--check out <Code>page-wrapper.test.tsx</Code> for an example of how the app's
            tests are set up. We'll expect you to add to these tests later in the live challenge.
          </li>
        </ul>
      </Paragraph>
      <br />
      <Body>
        <TaskHeader>Task 1: Fetch product data</TaskHeader>
        <Paragraph>
          Write a query to fetch product data using the <Code>get-products</Code> endpoint. Use react query to manage
          this data's state.
        </Paragraph>
        <Paragraph>
          Use the query results to dynamically populate the page with <Code>&lt;ProductCard /&gt;</Code> components.
        </Paragraph>
        <Paragraph>
          Swap out the hardcoded values in the <Code>&lt;ProductCard /&gt;</Code> component for the dynamic values
          coming from the query.
        </Paragraph>
        <br />
        <TaskHeader>Task 2: Style product cards</TaskHeader>
        <Paragraph>
          Using this mockup as your guide, build and style your <Code>&lt;ProductCard /&gt;</Code> component. We aren't
          providing pixels or color values, so just do your best to match what's in the image.
        </Paragraph>
        <MockupImage
          src='https://dutchie-images.s3.us-west-2.amazonaws.com/example-product-card.png'
          alt='Product Card Mockup'
        />
        <br />
        <br />
        <TaskHeader>Task 3: Build the Product Detail Page</TaskHeader>
        <Paragraph>
          In <Code>&lt;product.tsx /&gt;</Code>, build the Product Detail Page (PDP) for the product. The PDP should
          display the product's name, photo, description, brand, effects, and other relevant information. There's no
          design for this, so use your imagination and judgment and have fun with it!
        </Paragraph>
      </Body>
    </PageWrapper>
  );
}
