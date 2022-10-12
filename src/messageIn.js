import './App.css';
import { Text, Box, Avatar  } from '@mantine/core';
import { IconChevronLeft, IconInfoCircle, IconHeart, IconThumbUp } from '@tabler/icons';

function MessageIn() {
    return (
        <div>
            <Box className='messageHeader'>
                <Box className='messageHeaderInner'>
                    <IconChevronLeft />

                    <Avatar alt="jason" radius="xl" style={{ width: '50px', height: '50px'}} />
                    <IconInfoCircle />
                </Box>
                <Text>Jason Calacanis</Text>
            </Box>
            <Box className='textContainer'>
                <Box className='dateText'>
                    <Text>Wed, Sep 21 at 12:17 PM</Text>
                </Box>
                <Box className='otherTextLast'>
                    <Text>Clearly you're not desperate - you have the worlds greatest investors voting in support of a deal you already have covered. you're overfunded. will quietly cancel it... And to be clear, I'm not out actively soliciting folks. These are our exiting LPs not rondos. Sorry for any trouble</Text>
                </Box>
                <Box className='myTextLast'>
                    <Text>Morgan Stanley and Jared are very upset</Text>
                </Box>
                <Box className='otherText'>
                    <Text>Ugh</Text>
                </Box>
                <Box className='otherText'>
                    <Text>SPVs are how everyone is doing there deals now... Luke loved to SPVS etc</Text>
                </Box>
                <Box className='otherTextLast'>
                    <Text>Just trying to support you... obviously. I reached out to Jared and sort it out.</Text>
                </Box>
                <Box className='otherReaction'>
                    <IconHeart size={12} fill={'red'} color={'red'} />
                </Box>
                {/* <Box className='myText'>
                    <Text>adsf</Text>
                </Box> */}
                <Box className='myTextLast'>
                    <Text>Yes. I had to ask him to stop.</Text>
                </Box>
                <Box className='otherText'>
                    <Text>Cleaned it up with Jared</Text>
                </Box>
                <Box className='otherReaction'>
                    <IconHeart size={12} fill={'red'} color={'red'} />
                </Box>

                <Box className='otherText'>
                    <Text>I get where he is coming from..... Candidly. This deal has just captures the worlds imagination in an unimaginable way. It's bonkers…</Text>

                </Box>
                <Box className='otherTextLast'>
                    <Text>And you know I'm ride or die brother - I'd jump on a grande for you</Text>

                </Box>
                <Box className='otherReaction'>
                    <IconHeart size={12} fill={'red'} color={'red'} />
                </Box>


            </Box>









        </div>
    );
}

export default MessageIn;
