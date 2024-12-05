"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button>
            {pending ? (
                <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Updating ...
                </>
            ) : (
                "Submit"
            )}
        </Button>
    )
}