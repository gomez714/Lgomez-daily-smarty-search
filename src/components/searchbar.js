import { useForm } from "react-hook-form";

const Searchbar = ({page, onSubmit}) => {

    const { register, handleSubmit} = useForm();

    return (
        <form 
            className={`search-bar search-bar-${page}`}
            onSubmit={handleSubmit((data) => {
            onSubmit(data.query);
        })}>
            <div className="search-bar-wrapper">
                <input {...register('query', {required: true, minLength: 1}) } placeholder="&#xf002; Search DailySmarty" />
                <p>Press Return to search</p>
            </div>
        </form>
    )
}

export default Searchbar;