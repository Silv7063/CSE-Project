let socket;

export function connectWS(onMessage) {
  socket = new WebSocket("ws://localhost:5000/ws");

  socket.onopen = () => console.log("WebSocket connected");
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };
  socket.onclose = () => console.log("WebSocket closed");
}

export function sendWS(data) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(data));
  }
}
