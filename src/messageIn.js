import './App.css';
import { Text, Box, Avatar } from '@mantine/core';
import { IconChevronLeft, IconInfoCircle, IconHeart, IconThumbUp } from '@tabler/icons';
import AvatarCustom from './avatar';

function MessageIn(props) {
    const { name, messages, participants, setCurPerson } = props;
    let curDate = null;
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
    console.log(messages);
    return (
        <div>
            <Box className='messageHeader'>
                <Box className='messageHeaderInner'>
                    <div
                        className='messageHeaderBack'
                        onClick={() => setCurPerson('')}>
                        <IconChevronLeft />
                    </div>


                    <AvatarCustom participants={participants} />
                    <IconInfoCircle style={{ visibility: 'hidden' }} />
                </Box>
                <Text>
                    {name.length > 60 ? name.substring(0, 57) + '...' : name}
                </Text>
            </Box>
            {/* <Box className='textContainer'>
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
                <Box className='myText'>
                    <Text>adsf</Text>
                </Box>
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
            </Box> */}
            {/* <Box className='textContainer'>
                {messages.map((message, index) => {
                    if (message.sender.toLowerCase().includes('self')) {
                        return (
                            <Box className='myTextLast'>
                                <Text>{message.content}</Text>
                            </Box>
                        )
                    } else {
                        return (
                            <Box className='otherTextLast'>
                                <Text>{message.content}</Text>
                            </Box>
                        )
                    }
                })}
            </Box> */}
            <Box className='textContainer'>
                {messages.map((message) => {
                    let showDate = false;
                    let showReaction = false;
                    console.log(curDate);
                    if (!curDate) {
                        curDate = convertDate(message.date);
                        showDate = true;
                    } 
                    // else if the difference between the date and cur date is greater than 30 mins show the date
                    else if (Math.abs(new Date(convertDate(message.date)) - new Date(curDate)) > 1800000) {
                        curDate = convertDate(message.date);
                        showDate = true;
                    }
                    if (message.reactions.toLowerCase().includes('like')) {
                        showReaction = 'heart';
                    }
                    if (message.sender.toLowerCase().includes('self')) {
                        return (
                            <>
                                {showDate ? <Box className='dateText'><Text>{convertDateString(message.date)}</Text></Box> : null}
                                <Box className='myTextLast'>
                                    <Text>{message.content}</Text>
                                </Box>
                                {showReaction === 'heart' ? <Box className='myReaction'><IconHeart size={12} fill={'red'} color={'red'} /></Box> : null}
                            </>
                        )
                    } else {
                        return (
                            <div>
                                {showDate ? <Box className='dateText'><Text>{convertDateString(message.date)}</Text></Box> : null}
                                <Box className='otherTextLast'>
                                    <Text>{message.content}</Text>
                                </Box>
                                {showReaction === 'heart' ? <Box className='otherReaction'><IconHeart size={12} fill={'red'} color={'red'} /></Box> : null}
                            </div>
                        )
                    }
                })}
            </Box>
        </div>
    );
}

export default MessageIn;
