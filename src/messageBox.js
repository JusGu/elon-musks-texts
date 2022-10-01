import './App.css';
import { Text, Box } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import jason from './pfps/jason.jpg';

function MessageBox() {
    return (
        <div>
            <Box className='messageBox'>
                <div className='messageTextWrapper'>
                    <img src={jason} alt="jason" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    <div>
                        <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Jason Calacanis</Text>
                        <Text className='messageContent'
                            style={{ fontSize: '15px' }}>You loved "And you know I'm ride or die brother - I'd jump on a grande for you" </Text>
                    </div>
                    <IconChevronRight />
                </div>
            </Box>



        </div>
    );
}

export default MessageBox;
