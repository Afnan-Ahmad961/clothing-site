import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

const IMAGES_ROW_A = [
    "carosal-images/1.jpg",
    "carosal-images/2.jpg",
    "carosal-images/3.jpg",
    "carosal-images/4.jpg",
]

const IMAGES_ROW_B = [
    "carosal-images/5.jpg",
    "carosal-images/6.jpg",
    "carosal-images/7.jpg",
    "carosal-images/8.jpg",
]

export function ImageCarosal() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
            <ScrollVelocityContainer className="w-full">
                <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
                    {IMAGES_ROW_A.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="Unsplash sample"
                            width={240}
                            height={160}
                            loading="lazy"
                            decoding="async"
                            className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
                        />
                    ))}
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                    {IMAGES_ROW_B.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="Unsplash sample"
                            width={240}
                            height={160}
                            loading="lazy"
                            decoding="async"
                            className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
                        />
                    ))}
                </ScrollVelocityRow>
            </ScrollVelocityContainer>

            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}
