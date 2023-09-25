import { TopAppBar } from '../../common/appBar/appBar';

export function HomePage() {
    return (
        <div className="bg-red-500">
            <div>
                <TopAppBar />
            </div>
            <div>
                <div>{/* sidebar */}</div>
                <div>{/* rendering screens */}</div>
            </div>
        </div>
    );
}
