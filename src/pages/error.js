import { useRouter } from "next/router";

export default function Error() {
    const router = useRouter();

    return (
        <div>
            <code>{router.query.message}</code>
            <button onClick={() => router.back()}>back</button>
        </div>
    );
}