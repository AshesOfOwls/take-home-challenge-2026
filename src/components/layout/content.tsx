import styled from '@emotion/styled';

export const Body = styled.div`
  margin: 12px 0;
`;

export const Image = styled.img`
  display: inline-block;
  height: 430px;
  margin-bottom: 12px;
  width: 300px;
`;

export const PageHeader = styled.h1`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  list-style: circle inside;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const ListItem = styled.li`
  line-height: 1.6;
  list-style-type: disc;
  margin-left: 12px;
  padding-left: 24px;
  text-indent: -24px;
`;

export const Paragraph = styled.div`
  line-height: 1.5;
  margin-bottom: 16px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const HorizontalRule = styled.hr`
  border: 0;
  border-top: 1px solid #e2e8f0;
  margin: 24px 0;
`;

export const MainHeader = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #2d3748;
`;

export const TaskHeader = styled.h2`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #2d3748;
`;

export const Code = styled.code`
  background-color: #f1f5f9;
  border-radius: 4px;
  font-family: 'SF Mono', 'Menlo', 'Monaco', monospace;
  font-size: 0.9em;
  padding: 2px 6px;
`;

export const MockupImage = styled.img`
  display: block;
  max-width: 300px;
  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
