import React from "react";

export default function CTA() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm pt-8">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-muted rounded-lg"></div>
                <span>Over 50,000 worldwide</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-muted rounded-lg"></div>
                <span>Growth</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-muted rounded-lg"></div>
                <span>Licensed</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-muted rounded-lg"></div>
                <span>Happiness</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-muted rounded-lg"></div>
                <span>24/7 Support</span>
            </div>
        </div>
    );
}
