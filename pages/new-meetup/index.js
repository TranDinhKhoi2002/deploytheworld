import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

function NewMeetUp() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create the new meetup");
      }

      const data = await response.json();

      console.log(data);

      router.replace("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add your own meetup and create amazing networking opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetUp;
