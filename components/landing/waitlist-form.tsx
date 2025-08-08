import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function WaitlistForm() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className="bg-primary text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out mt-6 py-2 h-12 rounded-2xl px-8 font-bold text-lg">
                        Join the waitlist
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-pacifico">Join the waitlist</DialogTitle>
                        <DialogDescription>
                            We&apos;re building something amazing. Stay tuned for updates. We&apos;ll send you an email when we&apos;re ready to launch.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" placeholder="e.g. johndoe@gmail.com" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="name">Full Name</Label>
                            <Input type="text" id="name" name="name" placeholder="e.g. Mary Doe" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="rounded-xl">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="font-bold rounded-xl">Join the waitlist</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
