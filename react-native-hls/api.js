export const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhMjY5ZmQxYS1mODk3LTRkNzgtOTc1Yi0wODI0MzBmOGQ2MWMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NDkyMDI3OCwiZXhwIjoxNjg1NTI1MDc4fQ.Ehq0GcgYUiadkMhX-eUIoBF5uWXqmt-9245i7cUEPz0'; // token should be in String format

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
  console.log("live meetings", data.length);

  return data;
};