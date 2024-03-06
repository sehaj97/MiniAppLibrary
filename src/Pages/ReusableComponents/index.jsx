import ButtonUi from '../../Components/ButtonUi';
import HomeIcon from '../../Components/Homeicon';
import PlusIcon from '../../Components/PlusIcon';
import '../ReusableComponents/style.css'
const ReusableComponents = () => {

    return (<div className={`container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>

        <section>
            <h2>Filled Button (Default)</h2>
            <p>
                <ButtonUi>Default</ButtonUi>
            </p>
            <p>
                <ButtonUi mode="filled">Filled (Default)</ButtonUi>
            </p>
        </section>
        <section>
            <h2>Button with Outline</h2>
            <p>
                <ButtonUi mode="outline">Outline</ButtonUi>
            </p>
        </section>
        <section>
            <h2>Text-only Button</h2>
            <p>
                <ButtonUi mode="text">Text</ButtonUi>
            </p>
        </section>
        <section>
            <h2>Button with Icon</h2>
            <p>
                <ButtonUi Icon={HomeIcon}>Home</ButtonUi>
            </p>
            <p>
                <ButtonUi Icon={PlusIcon} mode="text">
                    Add
                </ButtonUi>
            </p>
        </section>
        <section>
            <h2>Buttons Should Support Any Props</h2>
            <p>
                <ButtonUi mode="filled" disabled>
                    Disabled
                </ButtonUi>
            </p>
            <p>
                <ButtonUi onClick={() => console.log('Clicked!')}>Click me</ButtonUi>
            </p>
        </section>
    </div>
    );
};

export default ReusableComponents;
