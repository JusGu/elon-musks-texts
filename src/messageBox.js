import './App.css';
import { Text, Box } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import AvatarCustom from './avatar';

function MessageBox(props) {
    const { name, message, time, participants} = props;
    let displayed_message = ""
    let message_array = message.split(" ");
    if (message_array[0].length > 40 || message_array[1]?.length > 40 || message_array[2]?.length > 40) {
        displayed_message = message.substring(0, 37) + "...";
    } else if (message.length > 77) {
        displayed_message = message.substring(0, 74) + "...";
    } else {
        displayed_message = message;
    }

    let displayed_time = time.split(" ")[0];

    return (
        <div>
            <Box className='messageBox'>
                <div className='messageTextWrapper'>
                    <AvatarCustom participants={participants} />
                    <div style={{ flexGrow: '1' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                {name.length > 20 ? name.substring(0, 17) + '...' : name}
                            </Text>
                            <Text className='messageContent' style={{ fontSize: '12px'}}>
                                {displayed_time}
                            </Text>
                        </div>

                        <Text className='messageContent'
                            style={{ fontSize: '12px' }}>
                            {displayed_message}
                        </Text>
                    </div>
                    <IconChevronRight style={{width: '20px', minWidth: '20px'}}/>
                </div>
            </Box>



        </div>
    );
}

export default MessageBox;
