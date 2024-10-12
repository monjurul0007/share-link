'use client';

import { useRouter } from 'next/navigation';

export default function PreviewNavBar() {
    const route = useRouter();

    const handleCopyUrl = () => {
        const currentUrl = window.location.href;

        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                alert('URL copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className="absolute w-[97%] bg-white rounded-lg sm:px-10 px-3 py-5 mt-5 flex justify-between">
            <button
                onClick={() => route.push('/editor/links')}
                className="max-sm:basis-1/2 max-sm:me-2 font-semibold border-2 border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-700 hover:text-white"
            >
                Back to Editor
            </button>

            <button
                onClick={handleCopyUrl}
                className="max-sm:basis-1/2 max-sm:ms-2 font-semibold border-2 border-purple-700 text-white bg-purple-700  px-4 py-2 rounded-md hover:bg-purple-500"
            >
                Share Link
            </button>
        </div>
    );
}
