import './App.css';
import { Box, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import MessageBox from './messageBox';
import MessageIn from './messageIn';
import { useState } from 'react';

function Messages() {
    const [curPerson, setCurPerson] = useState('asdf')
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
