import React from 'react';
import HornedBeast from './HornedBreast';

function Main() {
    return (
        <main>
            <h2>Main Component</h2>
            <HornedBeast
                title="Kudu"
                imageUrl="https://media.istockphoto.com/id/1157123331/photo/kudu-bull.jpg?s=612x612&w=0&k=20&c=smABJLd7PNKcEWP94p9rymejsKQoSj1pNEaNDr0atGo="
                description="The kudus are two species of antelope of the genus Tragelaphus: Lesser kudu, Tragelaphus imberbis, of eastern Africa Greater kudu, Tragelaphus strepsiceros, of eastern and southern Africa The two species look similar, though greaters are larger than lessers."
            />
            <HornedBeast
                title="Bighorn Sheep"
                imageUrl="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQli13PjktAwhkGynwpwwZLt90xZKLGZh4BYZS3ygvld_WGy9qizn0Tb0bHRgjUxAEgrsnVNMFmDBa6laE"
                description="The bighorn sheep is a species of sheep native to North America. It is named for its large horns. A pair of horns might weigh up to 14 kg; the sheep typically weigh up to 143 kg. Recent genetic testing indicates three distinct subspecies of Ovis canadensis, one of which is endangered: O. c. sierrae."
            />
        </main>
    );
}

export default Main;