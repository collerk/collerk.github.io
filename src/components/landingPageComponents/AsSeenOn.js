import { InfiniteSlider } from '@/components/ui/infinite-slider';

function AsSeenOn() {
    return (
        <InfiniteSlider gap={80} reverse>
            <img
                src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn4.iconfinder.com/data/icons/threads-by-instagram/128/threads-logo-brand-sign-contained-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn2.iconfinder.com/data/icons/social-media-2421/512/TikTok-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Pinterest-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
            <img
                src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_reddit-1024.png'
                alt=''
                className='h-[100px] w-auto'
            />
        </InfiniteSlider>
    )
}

export default AsSeenOn