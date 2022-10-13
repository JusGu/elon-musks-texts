import './App.css';
import { Box, Input } from '@mantine/core';
import { IconSearch, IconQuestionMark } from '@tabler/icons';
import MessageBox from './messageBox';
import MessageIn from './messageIn';
import { useState } from 'react';
import data from './output.json'


function Messages(props) {
    const {setModalOpened} = props;
    const [curPerson, setCurPerson] = useState('');
    const [search, setSearch] = useState('');
    let data_array = [];
    for (let key in data) {
        data_array.push({
            name: key,
            group: data[key]['group'],
            last_message: data[key]['last_message'],
            last_message_date: data[key]['last_message_date'],
            participants: data[key]['participants'],
        });
    }
    function convertDate(date) {
        let date_array = date.split(' ');
        let year_month_day = date_array[0].split('-');
        let hour_minute_second = date_array[1].split(':');
        let year = parseInt(year_month_day[0]);
        let month = parseInt(year_month_day[1] - 1);
        let day = parseInt(year_month_day[2]);
        let hour = parseInt(hour_minute_second[0]);
        let minute = parseInt(hour_minute_second[1]);
        let second = parseInt(hour_minute_second[2]);
        let date_obj = new Date(year, month, day, hour, minute, second).toLocaleString("en-US", { timeZone: "America/Chicago" });
        return date_obj;
    }
    data_array.sort(function (a, b) {
        return new Date(convertDate(b.last_message_date)) - new Date(convertDate(a.last_message_date));
    });
    return (
        <div>
            <Box
                className="messages"
            >
                {!curPerson ? (<div>
                    <Box className='searchBar'>
                        <Input
                            icon={<IconSearch />}
                            placeholder="Search"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            sx={{ width: '100%' }}
                        />
                        <div className='iconWrapperSmall' onClick={() => setModalOpened(true)}>
                            <IconQuestionMark size={50} color="#1a1b1e" />
                        </div>
                    </Box>

                    {data_array.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())).map((person) => (
                        (
                            <div key={person.name} onClick={() => setCurPerson(person)}>
                                <MessageBox
                                    name={person.name}
                                    message={person.last_message}
                                    time={person.last_message_date}
                                    participants={person.participants}
                                />
                            </div>
                        )
                    ))}
                </div>)
                    : (
                        <MessageIn
                            name={curPerson.name}
                            participants={curPerson.participants}
                            group={curPerson.group}
                            setCurPerson={setCurPerson}
                            setSearch={setSearch}
                            messages={data[curPerson.name]['messages']}
                        />
                    )}
            </Box>
        </div>
    );
}

export default Messages;
