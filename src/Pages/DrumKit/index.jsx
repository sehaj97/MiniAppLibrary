import "./style.css"
export default function DrumKit() {
    return (
        <>
            <div className='container drumbackground mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-8' >

                <h1 className="drumheading">Drum 🥁 Kit</h1>
                <div class="set">
                    <button class="w drum">w</button>
                    <button class="a drum">a</button>
                    <button class="s drum">s</button>
                    <button class="d drum">d</button>
                    <button class="j drum">j</button>
                    <button class="k drum">k</button>
                    <button class="l drum">l</button>
                </div>
            </div>

        </>
    )
}