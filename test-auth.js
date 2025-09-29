// Test authentication functionality
const testAuth = async () => {
    console.log('🚀 Testing authentication functionality...\n');

    try {
        // Test 1: Check if profile endpoint is accessible (requires authentication)
        console.log('Test 1: Checking profile endpoint accessibility...');
        const profileResponse = await fetch('http://localhost:5000/api/auth/profile', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2ZkNGIxZjNjZGI1NTBjNDYxNjg1ZiIsImlhdCI6MTc1ODQ2NjUxNywiZXhwIjoxNzU4NTUyOTE3fQ.b8bHXLAaFv3VK3R7IknxJVAAoXQMArceuuMpgDgZh_Q'
            }
        });

        const profileData = await profileResponse.json();

        if (profileData.success) {
            console.log('✅ Authentication working');
            console.log(`   User: ${profileData.data.name}\n`);
        } else {
            console.log('❌ Authentication not working');
            console.log(`   Error: ${profileData.message}\n`);
        }

        console.log('🎉 Authentication test completed!');

    } catch (error) {
        console.error('💥 Authentication test failed:', error);
    }
};

// Run the test
testAuth();