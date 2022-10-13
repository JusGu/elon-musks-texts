import './App.css';
import { Text, Box, Tooltip} from '@mantine/core';
import { IconChevronLeft, IconInfoCircle, IconHeart, IconThumbUp, IconThumbDown, IconMoodCrazyHappy, IconUserExclamation} from '@tabler/icons';
import AvatarCustom from './avatar';

function MessageIn(props) {
    const { name, messages, participants, setCurPerson, setSearch } = props;
    let curDate = null;
    let group = false;
    if(participants.length > 1){
        group = true;
    }
    let curPerson = null;
    function convertDateString(date) {
        let date_array = date.split(' ');
        let year_month_day = date_array[0].split('-');
        let hour_minute_second = date_array[1].split(':');
        let year = parseInt(year_month_day[0]);
        let month = parseInt(year_month_day[1] - 1);
        let day = parseInt(year_month_day[2]);
        let hour = parseInt(hour_minute_second[0]);
        let minute = parseInt(hour_minute_second[1]);
        let second = parseInt(hour_minute_second[2]);
        let date_obj = new Date(year, month, day, hour, minute, second);
        // format it in "Sep 12, 2021 at 10:30 AM"
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date_string = months[date_obj.getMonth()] + " " + date_obj.getDate() + ", " + date_obj.getFullYear() + " at " + date_obj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return date_string;
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
        let date_obj = new Date(year, month, day, hour, minute, second).toLocaleString("en-US", {timeZone: "America/Chicago"});
        return date_obj; 
    }
    messages.sort(function(a, b) {
        return new Date(convertDate(a.date)) - new Date(convertDate(b.date));
    });
    return (
        <div>
            <Box className='messageHeader'>
                <Box className='messageHeaderInner'>
                    <div
                        className='messageHeaderBack'
                        onClick={() => {
                            setCurPerson('');
                            setSearch('');
                        }}
                    >
                        <IconChevronLeft />
                    </div>


                    <AvatarCustom participants={participants} />
                    <IconInfoCircle style={{ visibility: 'hidden' }} />
                </Box>
                <Text>
                    {name.length > 60 ? name.substring(0, 57) + '...' : name}
                </Text>
            </Box>
            <Box className='textContainer'>
                {messages.map((message, i) => {
                    let showDate = false;
                    let showReaction = false;
                    if (!curDate) {
                        curDate = convertDate(message.date);
                        showDate = true;
                    } 
                    // else if the difference between the date and cur date is greater than 30 mins show the date
                    else if (Math.abs(new Date(convertDate(message.date)) - new Date(curDate)) > 1800000) {
                        curDate = convertDate(message.date);
                        showDate = true;
                    }
                    if (message.reactions && message.reactions.toLowerCase().includes('like')) {
                        showReaction = 'like';
                    }
                    if (message.reactions && message.reactions.toLowerCase().includes('love')) {
                        showReaction = 'love';
                    }
                    // laugh
                    if (message.reactions && message.reactions.toLowerCase().includes('laugh')) {
                        showReaction = 'laugh';
                    }
                    // emphasize
                    if (message.reactions && message.reactions.toLowerCase().includes('emphasize')) {
                        showReaction = 'emphasize';
                    }
                    // dislike
                    if (message.reactions && message.reactions.toLowerCase().includes('dislike')) {
                        showReaction = 'dislike';
                    }
                    if (message.sender && message.sender.toLowerCase().includes('self')) {
                        return (
                            <div key={i}>
                                {showDate ? <Box className='dateText'><Text>{convertDateString(message.date)}</Text></Box> : null}
                                <Box className='myTextLast'>
                                    <Text>{message.content}</Text>
                                </Box>
                                {showReaction === 'love' ? <Tooltip label='Love' position = 'right  '><Box className='myReaction'><IconHeart size={12} fill={'red'} color={'red'} /></Box></Tooltip> : null}
                                {showReaction === 'like' ? <Tooltip label='Like' position='right'><Box className='myReaction'><IconThumbUp size={12} fill={'yellow'} color={'yellow'} /></Box></Tooltip> : null}
                                {showReaction === 'laugh' ? <Tooltip label='Laugh' position='right'><Box className='myReaction'><IconMoodCrazyHappy size={12} color={'white'} /></Box></Tooltip> : null}
                                {showReaction === 'emphasize' ? <Tooltip label='Emphasize' position='right'><Box className='myReaction'><IconUserExclamation size={12} color={'white'} /></Box></Tooltip> : null}
                                {showReaction === 'dislike' ? <Tooltip label='Dislike' position='right'><Box className='myReaction'><IconThumbDown size={12} fill={'yellow'} color={'yellow'} /></Box></Tooltip> : null}
                            </div>
                        )
                    } else {
                        let showName = false;
                        if (curPerson !== message.sender) {
                            showName = true;
                        }
                        curPerson = message.sender;
                        return (
                            <div key={i}>
                                {showDate ? <Box className='dateText'><Text>{convertDateString(message.date)}</Text></Box> : null}
                                {(group && (showDate || showName)) && <div className='messageSender'>{message.sender}</div>}
                                <Box className='otherTextLast'>
                                    <Text>{message.content}</Text>
                                </Box>
                                {showReaction === 'love' ? <Tooltip label='Love' position='left'><Box className='otherReaction'><IconHeart size={12} fill={'red'} color={'red'} /></Box></Tooltip> : null}
                                {showReaction === 'like' ? <Tooltip label='Like' position='left'><Box className='otherReaction'><IconThumbUp size={12} fill={'yellow'} color={'yellow'} /></Box></Tooltip> : null}
                                {showReaction === 'laugh' ? <Tooltip label='Laugh' position='left'><Box className='otherReaction'><IconMoodCrazyHappy size={12} color={'white'} /></Box></Tooltip> : null}
                                {showReaction === 'emphasize' ? <Tooltip label='Emphasize' position='left'><Box className='otherReaction'><IconUserExclamation size={12} color={'white'} /></Box></Tooltip> : null}
                                {showReaction === 'dislike' ? <Tooltip label='Dislike' position='left'><Box className='otherReaction'><IconThumbDown size={12} fill={'yellow'} color={'yellow'} /></Box></Tooltip> : null}
                            </div>
                        )
                    }
                })}
            </Box>
        </div>
    );
}

export default MessageIn;
