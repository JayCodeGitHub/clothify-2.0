export const formItems = [
    {
      name: 'email',
      type: 'text',
      label: 'Email address',
      placeholder: 'Your Email Address',
      regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      errorRequire: 'Email is required',
      errorRegex: 'Invalid email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Password',
      regex: /^.{7,}$/,
      errorRequire: 'Password is required',
      errorRegex: 'Password must be at least 6 characters',
    },
]