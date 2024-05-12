import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export default function Landing() {
  const navigate = useNavigate();
   return (
    <div>
      <div className="mt-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex justify-center">
                <img src={'/chess.png'} className= "max-w-96" />
            </div>
            <div className="flex flex-col justify-center gap-4 max-w-md">
              <h1 className="text-4xl font-bold text-white"> Play Chess Online on the #2 site</h1>
              <div className="flex flex-row justify-center items-center">
                <Button onClick={() => {
                  navigate('/game')
                }}>
                  Play Online
                </Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
