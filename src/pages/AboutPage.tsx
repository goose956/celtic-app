export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About celtic
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Youtube creator scraper. scrape channels on youtube contact details.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                We are dedicated to creating innovative solutions that make a difference. 
                Our team is passionate about delivering high-quality products that exceed expectations.
              </p>
              <p className="mt-4 text-gray-600">
                Through cutting-edge technology and user-centered design, we strive to 
                build applications that are both powerful and intuitive.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-600">Quality and excellence in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-600">Innovation and continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-600">Customer satisfaction and support</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-600">Transparency and ethical practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Join thousands of satisfied users who trust celtic for their needs.
          </p>
          <div className="mt-6 text-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}