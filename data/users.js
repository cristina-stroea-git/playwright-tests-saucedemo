module.exports = [
    {
        role: 'Standard user',
        username: 'standard_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        role: 'Locked user',
        username: 'locked_out_user',
        password: 'secret_sauce',
        shouldLogin: false , 
        error: 'Epic sadface: Sorry, this user has been locked out.'
    },
    {
        role: 'Problem user',
        username: 'problem_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        role: 'Performance glitch user',
        username: 'performance_glitch_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        role: 'Error user',
        username: 'error_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        role: 'Visual user',
        username: 'visual_user',
        password: 'secret_sauce',
        shouldLogin: true
    }
];