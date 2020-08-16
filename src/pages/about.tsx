import React from 'react'

import Layout from '../components/layout'
import { SEO } from '../components/seo'

export default function IndexPage() {

    return (
        <Layout>
            <SEO title="About"/>

            <article className="article">
                <p>
                    I'm a 28 year old software developer from London, sticking my fingers into the pies of web
                    development, native mobile apps and devops.
                </p>

                <h2>Bio</h2>

                <p>
                    I graduated from the University of Plymouth with a BA in Digital Art &amp; Technology (Interaction
                    Design), where we were encouraged to blog about our projects; so you will find that many of the
                    earlier posts revolve around this. Prior to that I had already gotten my feet wet building websites
                    for local businesses whilst I was saving for a <a
                    href="https://www.youtube.com/watch?v=eKFjWR7X5dU">gap yah</a>.
                </p>

                <p>
                    After university I dove right into the deep-end, starting as a freelancer and getting involved in
                    projects for the likes of Virgin Holidays, Virgin Atlantic & Trend Microsystems (amongst others).
                    Whilst I was primarily working as an Android developer, I was often involved in implementing the
                    backend systems for these apps, which led into my passionate affair with Laravel and all things
                    backend.
                </p>

                <p>
                    Towards the end of 2017 I was getting weary of the stream of one-off projects, feeling like I never
                    had the time to nurture them. I wanted something that I could treat as my baby, something that was
                    constantly evolving and improving. Around the same time, a friend from school approached with a
                    proposition. He wanted to build on a project we had delivered for a customer a few years prior.
                </p>

                <p>
                    The project (then known as Project Clive) was an add-on to a piece of legacy software used in the
                    Social Care industry, and provided a cloud-based visit verification system that tied into to an
                    on-premise database application. The project had been live for a couple of years and had been
                    massively successful, the home care provider we delivered the project for had managed to streamline
                    much of their workflow, cut the costs of printing paper rotas, and most importantly were secure in
                    the knowledge that their vulnerable service users were being attended.
                </p>

                <p>
                    We started CareLineLive as a product that would bring the rest of a home care agency's workflow
                    online and into the "cloud". In the last two (and a bit) years we've secured private equity funding,
                    turned the project into a product and grown the company from a team of 2 to 15.
                </p>

                <p>
                    I'm always reminded about a making a comment somewhere along the lines of "I don't want to
                    work in the healthcare industry, it's boring", but I couldn't have been more wrong.
                </p>

                <h2>Technologies & Philosophies</h2>

                <p>
                    Whilst I would consider my bread &amp; butter to be database-driven backends, I'm very much involved
                    in all aspects of the product lifecycle. I'm used to working solo, and with CareLineLive we've still
                    kept the development team small.
                </p>

                <p>
                    My current day-to-day contains a mixture of the following:
                </p>

                <ul>
                    <li>
                        Backend - mainly PHP & Postgres, including heavy use of{' '}
                        <a href="https://laravel.com" target="_blank">Laravel</a>
                    </li>

                    <li>
                        Frontend - Angular, Sass, &amp; Typescript
                    </li>

                    <li>
                        Android - Kotlin
                    </li>

                    <li>
                        iOS - Swift
                    </li>

                    <li>
                        Devops - Kubernetes, Elastic Beanstalk, AWS, Google Cloud, and using Terraform for provisioning
                    </li>
                </ul>

                <p>
                    Many of the above I've aren't things I'd had experience of before CareLineLive. I was already
                    frequently building backends, frontends, Android apps, and hosting them with Elastic Beanstalk; and
                    while I've learnt a lot applying those skills to CareLineLive, iOS and Kubernetes weren't on my
                    radar previously.
                </p>

                <p>
                    The need to pick up the CareLineLive iOS development came about after a bad experience with
                    contractors. We had a deadline that couldn't be moved and they failed to deliver. This led to me
                    picking up the pieces and owning it from then on.
                </p>

                <p>
                    As we were getting started we would host customer environments on <a
                    href="https://aws.amazon.com/elasticbeanstalk/">Elastic Beanstalk</a>. Each customer would get their
                    own web & database servers. This was fine whilst we had a handful of customers, but knew it wouldn't
                    be manageable in the long-run. Deployments involved manually uploading a ZIP file for each
                    environment.
                </p>

                <p>
                    I made the decision to explore Kubernetes, which would allow us to simplify the management of each
                    customer's environment whilst maintaining sandboxing and resource compartmentalisation. Terraform
                    was a natural choice, allowing us to spin up additional identical clusters in different countries or
                    when nearing capacity. Deployments are as simple as changing a container tag now. It's also allowed
                    us to cut the cost per environment by about 70%.
                </p>

                <p>
                    My take on learning new technologies is always the same; dive in head first, fail, fix, and repeat.
                    Reading &amp; academia can only get you so far, you should spend your time tackling problems
                    head-on. There's nothing more motivating than solving a problem you're invested in. Keep an open
                    mind, don't be afraid of tools you haven't used before, and throw the towel in.
                </p>

                <h2>
                    Contacting me
                </h2>

                <p>
                    Whilst I wouldn't claim to have much of an internet presence, you can find me on
                    {' '}
                    <a href="https://twitter.com/decnorton">Twitter</a>
                    {' '}
                    or
                    {' '}
                    <a href="https://www.linkedin.com/in/dec-norton-9a930252/">LinkedIn</a>.
                </p>
            </article>
        </Layout>
    );
}
