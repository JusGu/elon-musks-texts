import './App.css';
import { Text, Box } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import jason from './pfps/jason.jpg';

function MessageBox(props) {
    const { name, message, time, pfp } = props;
    return (
        <div>
            <Box className='messageBox'>
                <div className='messageTextWrapper'>
                    <img src={jason} alt="jason" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    <div style={{flexGrow: '1'}}>
                        <div style={{display:'flex', justifyContent: 'space-between'}}>
                            <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>{name}</Text>
                            <Text className = 'messageContent'>{time}</Text>
                        </div>

                        <Text className='messageContent'
                            style={{ fontSize: '15px'}}>{message}</Text>
                    </div>
                    <IconChevronRight />
                </div>
            </Box>



        </div>
    );
}

export default MessageBox;
