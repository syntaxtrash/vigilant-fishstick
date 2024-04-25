"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function DemoReportAnIssue() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>OpenAI Text to Speech</CardTitle>
				<CardDescription>
					Text to Speech Voice Generator using AI
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				<div className="grid grid-cols-1 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="voice">Voice</Label>
						<Select defaultValue="alloy">
							<SelectTrigger id="voice">
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="alloy">Alloy</SelectItem>
								<SelectItem value="echo">Echo</SelectItem>
								<SelectItem value="fable">Fable</SelectItem>
								<SelectItem value="onyx">Onyx</SelectItem>
								<SelectItem value="nova">Nova</SelectItem>
								<SelectItem value="shimmer">Shimmer</SelectItem>
								<SelectItem value="support">Support</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="description">Text</Label>
					<Textarea
						id="text"
						placeholder="Please put the text to be converted to speech."
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button>Submit</Button>
			</CardFooter>
		</Card>
	);
}
