
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"

export default function Page() {
  return (
    <div>
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle> Destructive </AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert className="mt-2" variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle> Destructive </AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert className="mt-2" variant="success">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle> Success </AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  )
}
