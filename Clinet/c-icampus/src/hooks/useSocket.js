
const socket = new io ("http://localhost:3500", {
  autoConnect: false, 
  withCredentials: true,
});

function useSocket() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {

      socket.on('connect', () => {
      setIsConnected(true);
      });

      socket.on('disconnect', () => {
      setIsConnected(false);
      
      });

      socket.on('pong', () => {
      setLastPong(new Date().toISOString());
      });

      return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      };
  }, []);
  
}

export default useSocket;