import React, {FC, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../../validators/post.validator";
import './form-component.css'
import {IPost} from "../../models/IPost";
import {postService, userService} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import {ISetState} from "../../types/resType";

interface IProps {
    setTrigger: ISetState<boolean>
}

const FormComponent: FC<IProps> = ({setTrigger}) => {

    let {
        formState: {errors, isValid},
        register,
        handleSubmit,
        reset,
    } = useForm<IPost>({mode: 'all', resolver: joiResolver(postValidator)});

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        userService.getAllUsers().then((users: IUser[]) => setUsers([...users]));
    }, []);

    const [message, setMessage] = useState<boolean>(false)
    const save: SubmitHandler<IPost> = async (post: IPost) => {
        setMessage(true)
        await postService.createPost(post)
        setTrigger(prevState => !prevState)
        reset()
        setTimeout(() => {
            setMessage(false)
        }, 3000)
    }

    return (
        <div>
            <h2>Create a post</h2>
            <form onSubmit={handleSubmit(save)}>
                <label htmlFor="userId">
                    <p>Choose a user</p>
                    <select {...register('userId')} id="userId">
                        <option>Choose a user</option>
                        {
                            users.map((user: IUser) => (
                                <option
                                    key={user.id}
                                    value={user.id}
                                >
                                    {user.name}
                                </option>))
                        }
                    </select>
                    {errors.userId && <p className="error-item">user errors: {errors.userId?.message}</p>}
                </label>
                <label htmlFor="title">
                    <p>Write a title</p>
                    <input type="text" {...register('title')} id="title"/>
                </label>
                {errors.title && <p className="error-item">title errors: {errors.title?.message}</p>}
                <label htmlFor="body">
                    <p>Write a body</p>
                    <textarea {...register('body')} id="body"></textarea>
                    {errors.body && <p className="error-item">body errors: {errors.body?.message}</p>}
                </label>
                <input type="submit" value="send" disabled={!isValid}/>
            </form>
            {message && <p className="success">Post was created!</p>}
        </div>
    );
};

export default FormComponent;