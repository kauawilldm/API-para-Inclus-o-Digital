const getFreeCourses = (req, res) => {
  const courses = [
    { titulo: 'Introdução à Programação', plataforma: 'Coursera', link: 'https://www.coursera.org/learn/intro-programming' },
    { titulo: 'Ciência de Dados para Iniciantes', plataforma: 'edX', link: 'https://www.edx.org/course/data-science-for-beginners' },
    { titulo: 'Aprendizado de Máquina', plataforma: 'Coursera', link: 'https://www.coursera.org/learn/machine-learning' },
    { titulo: 'Introdução à Ciência da Computação', plataforma: 'Harvard Online / edX', link: 'https://www.edx.org/course/cs50s-introduction-to-computer-science' },
    { titulo: 'Desenvolvimento Web', plataforma: 'Udacity', link: 'https://www.udacity.com/course/intro-to-html-and-css--ud001' },
    { titulo: 'Python para Todos', plataforma: 'Coursera', link: 'https://www.coursera.org/specializations/python' },
    { titulo: 'Fundamentos de JavaScript', plataforma: 'Khan Academy', link: 'https://www.khanacademy.org/computing/computer-programming/html-css-js' },
    { titulo: 'Inteligência Artificial', plataforma: 'Udacity', link: 'https://www.udacity.com/course/intro-to-artificial-intelligence--cs271' },
    { titulo: 'Fundamentos de Segurança Cibernética', plataforma: 'Coursera', link: 'https://www.coursera.org/specializations/ibm-cybersecurity-analyst' },
    { titulo: 'Fundamentos de Blockchain', plataforma: 'Coursera', link: 'https://www.coursera.org/learn/blockchain-basics' }
  ];
  res.json(courses);
};

module.exports = { getFreeCourses };

  