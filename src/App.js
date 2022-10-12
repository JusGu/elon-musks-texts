import './App.css';
import { Title, Text, Box, Modal, Accordion } from '@mantine/core';
import Messages from './messages';
import { IconQuestionMark, IconBrandGithub, IconChevronRight } from '@tabler/icons';
import { useState } from 'react';

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        })
        }
      >
        <Messages />
        <div className='sideBar'>
          <div className='iconWrapper' onClick={() => setModalOpened(true)}>
            <IconQuestionMark size={50} color="#1a1b1e" />
          </div>
          <div 
          className='iconWrapper' 
          onClick={() => openInNewTab('https://github.com/JusGu/elon-musks-texts')}
          style={{background: '#c1c2c5'}}
          >
            <IconBrandGithub size={50} color="#1a1b1e" />
          </div>

        </div>


      </Box>
      <Modal
        title="About"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size={600}
      >
        <Accordion
          chevron={<IconChevronRight size={16} />}
          styles={{
            chevron: {
              '&[data-rotate]': {
                transform: 'rotate(90deg)',
              },
            },
          }}
        >
          <Accordion.Item title="What is this?" value='1'>
            <Accordion.Control>Background</Accordion.Control>
            <Accordion.Panel>On Sept 29th 2022, Delaware’s Court of Chancery released hundreds of text messages to and from Elon Musk. However, Delaware’s Court of Chancery put all these text on a table that was printed, redacted and scanned - rendering them basically unreadable. I spent days scanning through these documents to build this website so that you can read these text messages like actual text messages.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item title="What is this website?" value='2'>
            <Accordion.Control>What is this website?</Accordion.Control>
            <Accordion.Panel>This website contains all of the text messages from the Court of Chancery’s release. The text messages are presented in an easily readable format and you can search for specific people.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item title="Why did you do this?" value='3'>
            <Accordion.Control>Why did you do this?</Accordion.Control>
            <Accordion.Panel>I built this website because I think it’s important for people to be able to read these text messages in their entirety and not just snippets that are chosen by the media. I also think it’s important for people to be able to see the context in which they were used.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item title="How did you do this?" value='4'>
            <Accordion.Control>How did you do this?</Accordion.Control>
            <Accordion.Panel>I used a combination of OCR (Optical Character Recognition) and manual transcription to convert the scanned images of the text messages into text that can be easily read.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item title="Can I search for people?" value='5'>
            <Accordion.Control>What took you so long to release this?</Accordion.Control>
            <Accordion.Panel>I was studying for my midterms. And I wanted to make sure that the text messages were correctly transcribed before releasing the website.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item title="For Media: how can I share this website?" value='6'>
            <Accordion.Control>How can I get in touch with you?</Accordion.Control>
            <Accordion.Panel>Please email me at <a style={{ color: 'white' }} href="mailto:jjwgu@uwaterloo.ca">jjwgu@uwaterloo</a>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item title="I found an error in the transcription, what should I do?" value='7'>
            <Accordion.Control>I found an error in the transcription, what should I do?</Accordion.Control>
            <Accordion.Panel>Please email me at <a style={{ color: 'white' }} href="mailto:jjwgu@uwaterloo.ca">jjwgu@uwaterloo</a> and I will fix it as soon as possible.</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Modal>
    </div>
  );
}

export default App;
