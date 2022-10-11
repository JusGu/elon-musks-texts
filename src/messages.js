import './App.css';
import { Box, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import MessageBox from './messageBox';
import MessageIn from './messageIn';
import { useState } from 'react';
import data from './output.json'

function Messages() {
    for(let key in data){
        console.log(key);
    }
    const [curPerson, setCurPerson] = useState('')
    return (
        <div>
            <Box
                sx={(theme) => ({
                    border: '1px solid #25262b',
                    width: '500px',
                    padding: '2rem',
                    height: '800px',
                    overflow: 'auto',
                    borderRadius: '10px',
                })
                }
                className="messages"
            >
                {!curPerson ? (
                    <div>
                        <Input
                            icon={<IconSearch />}
                            placeholder="Search"
                            style={{ marginBottom: '2rem' }}
                        />
                        <MessageBox
                            name="Jason Calacanis"
                            message="You lov"
                            time="2022-10-03"
                        />
                    </div>
                ) : (
                    <MessageIn />
                )}
            </Box>
        </div>
    );
}

export default Messages;
