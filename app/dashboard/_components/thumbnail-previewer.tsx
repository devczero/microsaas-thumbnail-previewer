"use client"

import { useState,useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Laptop, Tablet, Smartphone } from "lucide-react"

const placeholderImage = '/placeholder.svg?height=720&width=1280'

const randomVideos = [
    { title: "Demolition Derby with WhistlinDiesel ", channel: "Mike Majlak Vlogs", views: "800K views", age: "5 days ago", thumbnail: "https://utfs.io/f/c1ea0b88-47ee-4c8d-9b83-fecfdaffd43d-dra94h.jpg" },
    { title: "WhistlinDiesel Cybertruck Durability Test", channel: "Whistlin Diesel", views: "1.5M views", age: "2 weeks ago", thumbnail: "https://utfs.io/f/e354e1b0-3fd1-44f0-903f-2f8fb0f02582-c71327.jpg" },
    { title: "Cybertruck Frames are Snapping in Half", channel: "Whistlin Diesel", views: "300K views", age: "1 month ago", thumbnail: "https://utfs.io/f/e59e69cd-e4bc-4fca-8d0b-373dc4cf4d97-c71328.jpg" },
    { title: "Build and Deploy 4 Modern React Apps", channel: "JavaScript Mastery", views: "800K views", age: "5 days ago", thumbnail: "https://utfs.io/f/38d144e1-b2df-46c3-b058-daeaef52a4b7-1y4j1.jpg" },
    { title: "Build & Deploy an Amazing 3D Portfolio with React.js", channel: "JavaScript Mastery", age: "1.5M views", time: "2 weeks ago", thumbnail: "https://utfs.io/f/9adf0739-3945-42e0-8273-23f4df8077ca-1y4j2.jpg" },
    { title: "Build a Full Stack React Native App with Payments", channel: "JavaScript Mastery", age: "300K views", time: "1 month ago", thumbnail: "https://utfs.io/f/d68aa754-85e9-4ee0-ac15-2f03029d531c-1y4j3.jpg" },
    { title: "James May finally drives the Tesla Cybertruck", channel: "James May", views: "1.2M views", age: "2 days ago", thumbnail: "https://utfs.io/f/777c7197-7f0b-4398-93de-1ee17cfe22d1-1sajio.jpg" },
    { title: "Demolition Derby with WhistlinDiesel ", channel: "Mike Majlak Vlogs", views: "800K views", age: "5 days ago", thumbnail: "https://utfs.io/f/c1ea0b88-47ee-4c8d-9b83-fecfdaffd43d-dra94h.jpg" },
    { title: "WhistlinDiesel Cybertruck Durability Test", channel: "Whistlin Diesel", views: "1.5M views", age: "2 weeks ago", thumbnail: "https://utfs.io/f/e354e1b0-3fd1-44f0-903f-2f8fb0f02582-c71327.jpg" },
    { title: "Cybertruck Frames are Snapping in Half", channel: "Whistlin Diesel", views: "300K views", age: "1 month ago", thumbnail: "https://utfs.io/f/e59e69cd-e4bc-4fca-8d0b-373dc4cf4d97-c71328.jpg" },
    { title: "Build and Deploy 4 Modern React Apps", channel: "JavaScript Mastery", views: "800K views", age: "5 days ago", thumbnail: "https://utfs.io/f/38d144e1-b2df-46c3-b058-daeaef52a4b7-1y4j1.jpg" },
    { title: "Build & Deploy an Amazing 3D Portfolio with React.js", channel: "JavaScript Mastery", age: "1.5M views", time: "2 weeks ago", thumbnail: "https://utfs.io/f/9adf0739-3945-42e0-8273-23f4df8077ca-1y4j2.jpg" },
    { title: "Build a Full Stack React Native App with Payments", channel: "JavaScript Mastery", age: "300K views", time: "1 month ago", thumbnail: "https://utfs.io/f/d68aa754-85e9-4ee0-ac15-2f03029d531c-1y4j3.jpg" },
    { title: "James May finally drives the Tesla Cybertruck", channel: "James May", views: "1.2M views", age: "2 days ago", thumbnail: "https://utfs.io/f/777c7197-7f0b-4398-93de-1ee17cfe22d1-1sajio.jpg" },
]

interface ThumbnailPreviewer {
    channelNameSaved: string
}

export default function ThumbnailPreviewer({ channelNameSaved } : {channelNameSaved: string}) {
    const [title, setTitle] = useState('')
    const [thumbnailUrl, setThubmanilUrl] = useState('')
    const [channelName, setChannelName] = useState('')
    const [videos, setVideos] = useState([...randomVideos])
    const [layout, setLayout] = useState('desktop')

    useEffect(() => {
        setVideos([
            { title, channel: channelName, views: '0', age: "Just Now", thumbnail: thumbnailUrl || placeholderImage }, ...randomVideos
        ])
    }, [title, channelName, thumbnailUrl])

    const randomizeOrder = () => {
        setVideos(prevVideos => [...prevVideos].sort(() => Math.random() - 0.5))
    }

    const getGridClass = () => {
        switch (layout) {
            case 'desktop':
                return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
            case 'tablet':
                return 'grid-cols-1 sm:grid-cols-2 max-w-[1100px] mx-auto'
            case 'mobile':
                return 'grid-cols-1 max-w-[340px] mx-auto'
            default:
                return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        }
    }

    return (
        <div className="relative w-full h-full bg-background text-foreground">
                {/* Input and Preview Section */}
                <div className="grid md:grid-cols-2 gap-6 border-b border-white/20 pb-12">
                    <div className="space-y-4">
                        <h3>Input</h3>
                        <Input
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input 
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                    const reader = new FileReader()
                                    reader.onload = (event) => {
                                        setThubmanilUrl(event.target?.result as string)
                                    }
                                    reader.readAsDataURL(file)
                                }
                            }}
                        />
                        <Input 
                            placeholder={channelNameSaved || "Channel Name"}
                            value={channelName || channelNameSaved}
                            onChange={(e) => setChannelName(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium leading-6 mb-4">Thumbnail Preview</h3>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden w-[60%]">
                                <img
                                    src={thumbnailUrl || placeholderImage}
                                    alt="thumbnail preview"
                                    className="object-cover w-full h-full"
                                />
                        </div>
                    </div>
                </div>
                {/* Product - Thumbnail Previewer Section */}

                {/* Randomize Order and Layout Selection */}
                <div className="mb-6 flex items-center space-x-4 max-w-[1200px] mx-auto">
                    <Button onClick={randomizeOrder}>Randomize Order</Button>
                    <div className="flex items-center space-x-2 rounded-full p-1 shadow-sm">
                        <Button
                            variant={layout === 'desktop' ? 'default' : 'ghost'}
                            size="icon"
                            onClick={() => setLayout('desktop')}
                            aria-label="Desktop layout"
                        >
                            <Laptop className="h-4 w-4" />
                        </Button>

                        <Button
                            variant={layout === 'tablet' ? 'default' : 'ghost'}
                            size="icon"
                            onClick={() => setLayout('tablet')}
                            aria-label="Tablet layout"
                        >
                            <Tablet className="h-4 w-4"/>
                        </Button>

                        <Button
                            variant={layout === 'mobile' ? 'default' : 'ghost'}
                            size="icon"
                            onClick={() => setLayout('mobile')}
                            aria-label="Mobile layout"
                        >
                            <Smartphone className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>

                {/* Video Cards for Thumbnail Previewing */}  
                <div className={`grid ${getGridClass()} gap-6 ${layout === 'mobile' ? 'w-full' : ''}`}>
                    {videos.map((video, index) => (
                        <div key={index} className={`overflow-hidden shadow-lg rounded-lg ${layout === 'mobile' ? 'max-w-[340px] mx-auto w-full' : ''}`}>
                            <div className="relative pb-[55%]">
                                <img
                                    src={video.thumbnail || placeholderImage}
                                    alt="video thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src={video.thumbnail || placeholderImage}
                                            alt="channel avatar"
                                            className="w-9 h-9 rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium truncate font-heading text-[#F1F1F1]">
                                            {video.title}
                                        </p>
                                        <p className="text-sm text-[#AAAAAA]">
                                            {video.channel || channelNameSaved}
                                        </p>
                                        <p className="text-sm text-[#AAAAAA]">
                                            {video.views} views • {video.age}
                                        </p>
                                    </div>
                                    

                                </div>

                            </div>

                        </div>
                    ))}

                </div>  
        </div>
    )
}