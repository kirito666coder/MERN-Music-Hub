import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const PlayAllSongsButton = () => {
  return (
    <Button size="lg" className="mt-2 w-fit self-center sm:self-start">
        <Play className="mr-2 h-5 w-5" /> Play All
      </Button>
  )
}

export default PlayAllSongsButton
