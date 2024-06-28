import image from "../../picture/11.png"

const FAQSection = () => {
    return (
        <div >
            <div className="divider"></div>
            <div className="text-center">
                <h2 className="text-3xl font-bold">FAQ</h2>
                <p className="text-lg">Here are commonly asked questions</p>
            </div>

            <div className="mt-8 flex gap-12 container mx-auto">
                <img src={image} alt="" />

                <div className="flex-1 space-y-6">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">How do I create an account on ByteJob?</div>
                        <div className="collapse-content">
                            <p>To create an account on ByteJob, follow these steps:

                                1. Click on the &quot;Sign Up&quot; button on the homepage.
                                2. Fill in the required details, including your name, email address, and password.
                                3. Verify your email address by clicking the link sent to your inbox.
                                4. Once verified, you can log in and complete your profile with additional information like your resume, skills, and work experience.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium"> How can I apply for jobs on ByteJob?</div>
                        <div className="collapse-content">
                            <p>Applying for jobs on ByteJob is simple:

                                1. Log in to your ByteJob account.
                                2. Use the search bar to find jobs that match your skills and preferences.
                                3. Click on a job listing to view its details.
                                4. If the job suits you, click the &quot;Apply&quot; button.
                                5. Follow the prompts to submit your application, including uploading your resume and any other required documents.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">How can I optimize my profile to attract more job offers?</div>
                        <div className="collapse-content">
                            <p>To optimize your profile on ByteJob:

                                1. Ensure all sections of your profile are complete and up-to-date.
                                2. Use a professional profile picture.
                                3. Write a compelling summary that highlights your skills and career goals.
                                4. Add detailed descriptions of your work experience, including responsibilities and achievements.
                                5. Include relevant skills and certifications.
                                6. Request recommendations from colleagues and former employers.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Is ByteJob free to use, or are there any paid features?</div>
                        <div className="collapse-content">
                            <p>ByteJob offers both free and premium features:

                                Free Features: You can create a profile, search for jobs, and apply to a limited number of job postings without any cost.

                                Premium Features: ByteJob Premium includes benefits such as unlimited job applications, profile boosting to increase visibility to employers, access to exclusive job postings, and personalized job recommendations. Premium plans are available on a monthly or yearly subscription basis.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium"> How can I track the status of my job applications?</div>
                        <div className="collapse-content">
                            <p>To track the status of your job applications on ByteJob:

                                Log in to your ByteJob account.
                                Go to the &quot;My Applications&quot; section, which can be found in your dashboard or profile menu.
                                Here, you will see a list of all the jobs you have applied for along with their current status, such as &quot;Submitted,&quot; &quot;Under Review,&quot; &quot;Interview Scheduled,&quot; or &quot;Closed.&quot;
                                You can also enable email notifications to receive updates on the status of your applications directly to your inbox.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FAQSection;