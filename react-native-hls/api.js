export const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhYzI4MGQxNS05ZGUyLTQyNDMtOTIzYS1hNDNlN2FhZGUyYTgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NDc0Nzg5MywiZXhwIjoxNjg1MzUyNjkzfQ.27T54SjMqvGFyKRTQ-qEPuYmifaMtxz5iaP6rjplIYE'; // token should be in String format

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const { roomId } = await res.json();
  console.log("room id", roomId);
  return roomId;
};

export const getLiveMeetings = async (/* { token } */) => {
  const res = await fetch("https://api.videosdk.live/v2/hls", {
    method: "GET",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
  });
  
  const data = await res.json();
  console.log("live meetings", data);

  return data;
};